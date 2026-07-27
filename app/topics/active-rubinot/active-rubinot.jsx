import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot');
}

export default function ActiveRubinotKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot" />;
}
