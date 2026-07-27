import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-ots');
}

export default function HarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-ots" />;
}
