import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-uk');
}

export default function NoResetOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-uk" />;
}
