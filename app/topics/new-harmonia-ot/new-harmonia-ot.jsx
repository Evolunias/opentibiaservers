import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot');
}

export default function NewHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot" />;
}
