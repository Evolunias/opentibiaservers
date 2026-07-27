import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-france');
}

export default function NoResetOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-france" />;
}
