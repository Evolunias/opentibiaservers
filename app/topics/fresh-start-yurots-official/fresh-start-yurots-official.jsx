import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-official');
}

export default function FreshStartYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-official" />;
}
