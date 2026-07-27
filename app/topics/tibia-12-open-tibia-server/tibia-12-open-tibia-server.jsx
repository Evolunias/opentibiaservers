import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-open-tibia-server');
}

export default function Tibia12OpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-open-tibia-server" />;
}
