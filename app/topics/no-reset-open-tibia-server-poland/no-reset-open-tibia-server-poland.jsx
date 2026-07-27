import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-poland');
}

export default function NoResetOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-poland" />;
}
