import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-client');
}

export default function OfficialClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-client" />;
}
