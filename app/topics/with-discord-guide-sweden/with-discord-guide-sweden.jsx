import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-sweden');
}

export default function WithDiscordGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-sweden" />;
}
