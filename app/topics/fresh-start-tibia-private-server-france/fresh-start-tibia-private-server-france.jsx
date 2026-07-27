import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-france');
}

export default function FreshStartTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-france" />;
}
