import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-active');
}

export default function Tibia13ServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-active" />;
}
