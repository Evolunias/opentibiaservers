import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-ot');
}

export default function OfficialNilotOtKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-ot" />;
}
