import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-official');
}

export default function ActiveClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-official" />;
}
