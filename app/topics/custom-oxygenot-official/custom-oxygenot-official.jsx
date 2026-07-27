import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-official');
}

export default function CustomOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-official" />;
}
