import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-ot');
}

export default function NoResetOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-ot" />;
}
