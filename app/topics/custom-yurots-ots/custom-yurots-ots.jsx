import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-ots');
}

export default function CustomYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-ots" />;
}
