import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-active');
}

export default function Tibia86ServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-active" />;
}
