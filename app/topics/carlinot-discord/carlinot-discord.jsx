import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-discord');
}

export default function CarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="carlinot-discord" />;
}
