import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-open-tibia-server');
}

export default function Tibia13OpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-open-tibia-server" />;
}
