import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-sweden');
}

export default function LowExpDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-sweden" />;
}
