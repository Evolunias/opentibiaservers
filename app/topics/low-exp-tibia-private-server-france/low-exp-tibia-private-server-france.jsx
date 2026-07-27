import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-france');
}

export default function LowExpTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-france" />;
}
