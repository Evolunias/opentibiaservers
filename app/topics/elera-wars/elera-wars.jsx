import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-wars');
}

export default function EleraWarsKeywordPage() {
  return <StaticKeywordPage slug="elera-wars" />;
}
