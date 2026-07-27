import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-status');
}

export default function Tibia13NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-status" />;
}
