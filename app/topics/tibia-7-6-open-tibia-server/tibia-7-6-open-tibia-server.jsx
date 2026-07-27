import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-open-tibia-server');
}

export default function Tibia76OpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-open-tibia-server" />;
}
