import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-north-america');
}

export default function NoResetOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-north-america" />;
}
