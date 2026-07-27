import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-ot');
}

export default function NewHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-ot" />;
}
