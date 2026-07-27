import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-official');
}

export default function TopYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-official" />;
}
