import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-ot');
}

export default function OfficialClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-ot" />;
}
