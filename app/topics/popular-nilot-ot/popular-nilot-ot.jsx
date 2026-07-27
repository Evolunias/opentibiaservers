import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-ot');
}

export default function PopularNilotOtKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-ot" />;
}
