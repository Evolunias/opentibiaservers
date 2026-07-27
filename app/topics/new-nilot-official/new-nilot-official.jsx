import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-official');
}

export default function NewNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-official" />;
}
