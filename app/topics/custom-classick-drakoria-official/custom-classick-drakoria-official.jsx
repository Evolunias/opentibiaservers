import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-official');
}

export default function CustomClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-official" />;
}
