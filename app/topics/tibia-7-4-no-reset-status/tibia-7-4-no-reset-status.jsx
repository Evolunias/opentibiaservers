import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-no-reset-status');
}

export default function Tibia74NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-no-reset-status" />;
}
