import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-server');
}

export default function OfficialAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-server" />;
}
