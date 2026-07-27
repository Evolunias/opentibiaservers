import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-discord');
}

export default function OpenTibiaServersDiscordKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-discord" />;
}
