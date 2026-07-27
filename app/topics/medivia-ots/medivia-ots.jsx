import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-ots');
}

export default function MediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="medivia-ots" />;
}
