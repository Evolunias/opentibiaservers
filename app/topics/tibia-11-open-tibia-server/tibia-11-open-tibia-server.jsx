import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-open-tibia-server');
}

export default function Tibia11OpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-open-tibia-server" />;
}
