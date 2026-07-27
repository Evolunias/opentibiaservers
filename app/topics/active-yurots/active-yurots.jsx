import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots');
}

export default function ActiveYurotsKeywordPage() {
  return <StaticKeywordPage slug="active-yurots" />;
}
