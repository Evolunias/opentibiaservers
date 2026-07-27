import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-open-tibia-server');
}

export default function Tibia854OpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-open-tibia-server" />;
}
