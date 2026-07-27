import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-official');
}

export default function FreshStartOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-official" />;
}
