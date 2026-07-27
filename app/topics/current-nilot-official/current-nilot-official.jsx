import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-official');
}

export default function CurrentNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-official" />;
}
