import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-official');
}

export default function BestNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-official" />;
}
