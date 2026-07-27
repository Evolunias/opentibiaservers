import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-no-reset-status');
}

export default function Tibia854NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-no-reset-status" />;
}
