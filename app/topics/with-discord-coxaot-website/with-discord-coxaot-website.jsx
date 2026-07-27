import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-website');
}

export default function WithDiscordCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-website" />;
}
