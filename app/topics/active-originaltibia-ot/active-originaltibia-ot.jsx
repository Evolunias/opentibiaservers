import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-ot');
}

export default function ActiveOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-ot" />;
}
