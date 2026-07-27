import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-no-reset-client');
}

export default function Tibia1098NoResetClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-no-reset-client" />;
}
