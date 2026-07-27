import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-ots');
}

export default function OfficialYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-ots" />;
}
