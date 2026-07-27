import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-ots');
}

export default function ActiveOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-ots" />;
}
