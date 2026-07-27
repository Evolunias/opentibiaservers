import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-sweden');
}

export default function SabrehavenLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-sweden" />;
}
