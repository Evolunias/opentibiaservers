import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-sweden');
}

export default function SabrehavenHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-sweden" />;
}
