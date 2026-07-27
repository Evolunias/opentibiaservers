import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-ots');
}

export default function OfficialNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-ots" />;
}
