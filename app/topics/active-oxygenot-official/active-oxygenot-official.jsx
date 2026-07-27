import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-official');
}

export default function ActiveOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-official" />;
}
