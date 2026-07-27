import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-official');
}

export default function FreshStartUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-official" />;
}
