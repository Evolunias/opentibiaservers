import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot');
}

export default function CustomRubinotKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot" />;
}
