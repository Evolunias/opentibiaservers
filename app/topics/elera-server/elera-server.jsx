import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-server');
}

export default function EleraServerKeywordPage() {
  return <StaticKeywordPage slug="elera-server" />;
}
