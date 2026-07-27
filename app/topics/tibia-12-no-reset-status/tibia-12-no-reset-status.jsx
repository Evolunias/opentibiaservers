import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-status');
}

export default function Tibia12NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-status" />;
}
