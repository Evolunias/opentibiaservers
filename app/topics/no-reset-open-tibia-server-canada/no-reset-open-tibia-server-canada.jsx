import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-canada');
}

export default function NoResetOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-canada" />;
}
