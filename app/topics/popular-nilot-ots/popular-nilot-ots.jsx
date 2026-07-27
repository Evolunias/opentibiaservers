import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-ots');
}

export default function PopularNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-ots" />;
}
