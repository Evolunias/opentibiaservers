import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-no-reset-status');
}

export default function Tibia81NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-no-reset-status" />;
}
