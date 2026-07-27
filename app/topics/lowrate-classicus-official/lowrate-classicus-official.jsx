import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-official');
}

export default function LowrateClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-official" />;
}
