import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-official');
}

export default function FreshStartNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-official" />;
}
