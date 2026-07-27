import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-usa-server');
}

export default function ThorniaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-usa-server" />;
}
