import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-ots');
}

export default function WithDiscordCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-ots" />;
}
