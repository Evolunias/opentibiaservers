import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-ot');
}

export default function TopHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-ot" />;
}
