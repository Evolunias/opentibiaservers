import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-no-reset-servers');
}

export default function Tibia80NoResetServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-no-reset-servers" />;
}
