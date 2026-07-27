import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-brazil');
}

export default function WithDiscordGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-brazil" />;
}
