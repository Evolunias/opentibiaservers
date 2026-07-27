import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-open-tibia-server');
}

export default function Tibia86OpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-open-tibia-server" />;
}
