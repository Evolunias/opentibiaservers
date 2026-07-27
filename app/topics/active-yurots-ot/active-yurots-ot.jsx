import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-ot');
}

export default function ActiveYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-ot" />;
}
