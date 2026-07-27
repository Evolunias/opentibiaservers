import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibia-private-server-france');
}

export default function HighExpTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibia-private-server-france" />;
}
