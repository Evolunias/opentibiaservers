import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-official');
}

export default function LowrateRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-official" />;
}
