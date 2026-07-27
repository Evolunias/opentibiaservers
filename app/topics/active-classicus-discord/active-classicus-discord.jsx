import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-discord');
}

export default function ActiveClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-discord" />;
}
