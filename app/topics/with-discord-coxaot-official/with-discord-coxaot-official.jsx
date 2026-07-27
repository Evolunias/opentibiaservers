import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-official');
}

export default function WithDiscordCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-official" />;
}
