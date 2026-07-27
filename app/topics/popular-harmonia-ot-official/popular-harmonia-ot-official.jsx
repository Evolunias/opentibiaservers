import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-official');
}

export default function PopularHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-official" />;
}
