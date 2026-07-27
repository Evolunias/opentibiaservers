import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-ots');
}

export default function CustomOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-ots" />;
}
