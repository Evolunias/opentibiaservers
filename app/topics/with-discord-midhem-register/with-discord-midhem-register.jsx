import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-register');
}

export default function WithDiscordMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-register" />;
}
