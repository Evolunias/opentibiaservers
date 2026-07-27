import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia');
}

export default function LowrateMediviaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia" />;
}
