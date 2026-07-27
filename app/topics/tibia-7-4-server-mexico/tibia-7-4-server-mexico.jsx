import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-mexico');
}

export default function Tibia74ServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-mexico" />;
}
