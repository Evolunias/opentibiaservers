import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-ot');
}

export default function CustomYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-ot" />;
}
