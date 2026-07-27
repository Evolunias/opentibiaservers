import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-ot-server');
}

export default function OfficialNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-ot-server" />;
}
