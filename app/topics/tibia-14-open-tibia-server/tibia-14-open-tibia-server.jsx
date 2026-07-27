import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-open-tibia-server');
}

export default function Tibia14OpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-open-tibia-server" />;
}
