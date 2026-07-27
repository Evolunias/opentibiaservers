import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-official');
}

export default function LowrateImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-official" />;
}
