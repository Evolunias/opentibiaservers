import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-no-reset-status');
}

export default function Tibia86NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-no-reset-status" />;
}
