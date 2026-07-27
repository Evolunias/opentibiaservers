import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibia-private-server-europe');
}

export default function NoResetTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibia-private-server-europe" />;
}
