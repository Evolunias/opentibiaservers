import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-discord');
}

export default function AmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="ameria-discord" />;
}
