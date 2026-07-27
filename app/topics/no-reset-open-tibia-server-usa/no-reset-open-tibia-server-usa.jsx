import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-usa');
}

export default function NoResetOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-usa" />;
}
