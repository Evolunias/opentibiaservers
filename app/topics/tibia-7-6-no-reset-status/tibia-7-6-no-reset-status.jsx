import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-no-reset-status');
}

export default function Tibia76NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-no-reset-status" />;
}
