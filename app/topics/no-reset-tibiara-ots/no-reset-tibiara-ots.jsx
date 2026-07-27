import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-ots');
}

export default function NoResetTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-ots" />;
}
