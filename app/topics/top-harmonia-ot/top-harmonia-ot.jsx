import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot');
}

export default function TopHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot" />;
}
