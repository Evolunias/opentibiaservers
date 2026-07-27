import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-status');
}

export default function Tibia11NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-status" />;
}
