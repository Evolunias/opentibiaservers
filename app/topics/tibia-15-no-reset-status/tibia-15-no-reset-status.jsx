import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-status');
}

export default function Tibia15NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-status" />;
}
