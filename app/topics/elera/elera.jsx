import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera');
}

export default function EleraKeywordPage() {
  return <StaticKeywordPage slug="elera" />;
}
