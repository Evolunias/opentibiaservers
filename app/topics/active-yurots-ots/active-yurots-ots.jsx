import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-ots');
}

export default function ActiveYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-ots" />;
}
