import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-official');
}

export default function CarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="carlinot-official" />;
}
