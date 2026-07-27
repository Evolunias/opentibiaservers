import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-official');
}

export default function LowrateOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-official" />;
}
