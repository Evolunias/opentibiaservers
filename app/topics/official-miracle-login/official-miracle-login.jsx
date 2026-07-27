import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-login');
}

export default function OfficialMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-login" />;
}
