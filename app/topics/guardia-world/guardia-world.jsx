import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-world');
}

export default function GuardiaWorldKeywordPage() {
  return <StaticKeywordPage slug="guardia-world" />;
}
