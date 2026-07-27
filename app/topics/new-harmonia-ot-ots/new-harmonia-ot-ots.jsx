import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-ots');
}

export default function NewHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-ots" />;
}
