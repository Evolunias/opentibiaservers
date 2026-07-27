import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-brazil');
}

export default function MediviaWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-brazil" />;
}
