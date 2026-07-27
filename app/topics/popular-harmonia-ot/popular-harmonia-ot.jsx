import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot');
}

export default function PopularHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot" />;
}
