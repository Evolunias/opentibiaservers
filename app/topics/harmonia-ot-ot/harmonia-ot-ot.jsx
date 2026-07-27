import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-ot');
}

export default function HarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-ot" />;
}
