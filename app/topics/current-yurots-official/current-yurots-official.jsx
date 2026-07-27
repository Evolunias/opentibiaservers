import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-official');
}

export default function CurrentYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-official" />;
}
