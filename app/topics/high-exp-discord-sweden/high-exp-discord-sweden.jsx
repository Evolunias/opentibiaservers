import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-sweden');
}

export default function HighExpDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-sweden" />;
}
