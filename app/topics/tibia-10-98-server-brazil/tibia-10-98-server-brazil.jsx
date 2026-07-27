import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-brazil');
}

export default function Tibia1098ServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-brazil" />;
}
