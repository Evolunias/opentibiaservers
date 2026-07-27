import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-south-america');
}

export default function HighExpDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-south-america" />;
}
