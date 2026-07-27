import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-ots');
}

export default function OfficialClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-ots" />;
}
