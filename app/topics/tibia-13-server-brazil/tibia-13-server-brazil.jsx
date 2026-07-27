import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-brazil');
}

export default function Tibia13ServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-brazil" />;
}
