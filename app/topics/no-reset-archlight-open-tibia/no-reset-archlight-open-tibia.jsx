import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-open-tibia');
}

export default function NoResetArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-open-tibia" />;
}
