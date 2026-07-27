import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-official');
}

export default function ActiveNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-official" />;
}
