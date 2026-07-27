import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-discord');
}

export default function CustomTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-discord" />;
}
