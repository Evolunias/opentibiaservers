import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia');
}

export default function CustomOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia" />;
}
