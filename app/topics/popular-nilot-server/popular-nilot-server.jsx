import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-server');
}

export default function PopularNilotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-server" />;
}
