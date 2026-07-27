import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-south-america');
}

export default function WithDiscordGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-south-america" />;
}
