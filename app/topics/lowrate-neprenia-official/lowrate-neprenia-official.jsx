import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-official');
}

export default function LowrateNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-official" />;
}
