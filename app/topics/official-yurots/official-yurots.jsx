import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots');
}

export default function OfficialYurotsKeywordPage() {
  return <StaticKeywordPage slug="official-yurots" />;
}
