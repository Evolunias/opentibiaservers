import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-ot');
}

export default function NoResetTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-ot" />;
}
