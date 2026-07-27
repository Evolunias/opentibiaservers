import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-ot');
}

export default function OfficialOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-ot" />;
}
