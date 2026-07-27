import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia');
}

export default function GuardiaKeywordPage() {
  return <StaticKeywordPage slug="guardia" />;
}
