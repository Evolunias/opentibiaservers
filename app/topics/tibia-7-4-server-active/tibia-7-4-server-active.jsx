import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-active');
}

export default function Tibia74ServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-active" />;
}
