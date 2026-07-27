import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-ot');
}

export default function PopularHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-ot" />;
}
