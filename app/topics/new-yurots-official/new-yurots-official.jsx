import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-official');
}

export default function NewYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-official" />;
}
