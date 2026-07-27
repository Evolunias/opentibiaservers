import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-open-tibia-server');
}

export default function Tibia80OpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-open-tibia-server" />;
}
