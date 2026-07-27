import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-official');
}

export default function LowrateAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-official" />;
}
