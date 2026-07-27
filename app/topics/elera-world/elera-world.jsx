import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-world');
}

export default function EleraWorldKeywordPage() {
  return <StaticKeywordPage slug="elera-world" />;
}
