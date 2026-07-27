import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-official');
}

export default function OfficialClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-official" />;
}
