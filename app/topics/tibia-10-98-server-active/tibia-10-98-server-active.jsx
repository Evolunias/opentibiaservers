import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-active');
}

export default function Tibia1098ServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-active" />;
}
