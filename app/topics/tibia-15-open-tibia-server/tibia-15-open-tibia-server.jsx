import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-open-tibia-server');
}

export default function Tibia15OpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-open-tibia-server" />;
}
