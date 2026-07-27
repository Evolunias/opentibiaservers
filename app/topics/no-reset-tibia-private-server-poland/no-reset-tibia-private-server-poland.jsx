import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibia-private-server-poland');
}

export default function NoResetTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibia-private-server-poland" />;
}
