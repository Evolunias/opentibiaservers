import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-ot');
}

export default function TopOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-ot" />;
}
