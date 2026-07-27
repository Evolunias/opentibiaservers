import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots');
}

export default function CustomYurotsKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots" />;
}
