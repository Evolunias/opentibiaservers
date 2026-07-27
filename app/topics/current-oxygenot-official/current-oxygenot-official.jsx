import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-official');
}

export default function CurrentOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-official" />;
}
