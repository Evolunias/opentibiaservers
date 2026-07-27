import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-official');
}

export default function PopularNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-official" />;
}
