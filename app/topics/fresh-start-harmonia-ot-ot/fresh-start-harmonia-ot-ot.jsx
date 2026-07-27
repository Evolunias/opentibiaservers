import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-ot');
}

export default function FreshStartHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-ot" />;
}
