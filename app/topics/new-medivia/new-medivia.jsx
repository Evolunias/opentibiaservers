import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia');
}

export default function NewMediviaKeywordPage() {
  return <StaticKeywordPage slug="new-medivia" />;
}
