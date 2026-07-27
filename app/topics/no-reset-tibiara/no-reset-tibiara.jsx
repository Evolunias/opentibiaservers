import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara');
}

export default function NoResetTibiaraKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara" />;
}
