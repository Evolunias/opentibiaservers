import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-ots');
}

export default function TopOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-ots" />;
}
