import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia');
}

export default function MediviaKeywordPage() {
  return <StaticKeywordPage slug="medivia" />;
}
