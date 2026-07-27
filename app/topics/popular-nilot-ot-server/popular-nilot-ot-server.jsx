import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-ot-server');
}

export default function PopularNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-ot-server" />;
}
