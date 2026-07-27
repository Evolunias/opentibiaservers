import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-server');
}

export default function OfficialClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-server" />;
}
