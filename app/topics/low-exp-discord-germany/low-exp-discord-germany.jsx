import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-germany');
}

export default function LowExpDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-germany" />;
}
