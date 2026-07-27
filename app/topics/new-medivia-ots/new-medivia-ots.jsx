import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-ots');
}

export default function NewMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-ots" />;
}
