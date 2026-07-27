import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-official');
}

export default function BestYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-official" />;
}
