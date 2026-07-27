import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-official');
}

export default function CustomNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-official" />;
}
