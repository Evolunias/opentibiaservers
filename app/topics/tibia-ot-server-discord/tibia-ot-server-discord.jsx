import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-discord');
}

export default function TibiaOtServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-discord" />;
}
