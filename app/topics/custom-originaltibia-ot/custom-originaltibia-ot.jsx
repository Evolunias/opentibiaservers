import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-ot');
}

export default function CustomOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-ot" />;
}
