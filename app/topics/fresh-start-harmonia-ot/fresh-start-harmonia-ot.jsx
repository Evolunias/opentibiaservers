import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot');
}

export default function FreshStartHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot" />;
}
