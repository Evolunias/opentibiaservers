import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-sweden');
}

export default function SabrehavenNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-sweden" />;
}
