import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-discord');
}

export default function TibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-discord" />;
}
