import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-south-america');
}

export default function NoResetOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-south-america" />;
}
