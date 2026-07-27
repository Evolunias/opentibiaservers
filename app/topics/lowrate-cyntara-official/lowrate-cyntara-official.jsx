import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-official');
}

export default function LowrateCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-official" />;
}
