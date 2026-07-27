import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-official');
}

export default function BestOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-official" />;
}
