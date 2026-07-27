import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-discord-server-argentina');
}

export default function DemolidoresWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-discord-server-argentina" />;
}
