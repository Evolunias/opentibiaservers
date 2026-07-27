import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-no-reset-status');
}

export default function Tibia84NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-no-reset-status" />;
}
