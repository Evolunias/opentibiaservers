import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-tibia');
}

export default function NoResetArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-tibia" />;
}
