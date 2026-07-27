import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-discord');
}

export default function OtlandServerGalaDiscordKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-discord" />;
}
