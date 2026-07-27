import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-no-reset-status');
}

export default function Tibia1098NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-no-reset-status" />;
}
