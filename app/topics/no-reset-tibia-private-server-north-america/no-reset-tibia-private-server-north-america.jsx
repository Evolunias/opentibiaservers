import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibia-private-server-north-america');
}

export default function NoResetTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibia-private-server-north-america" />;
}
