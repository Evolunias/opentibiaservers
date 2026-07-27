import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-discord');
}

export default function ActiveTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-discord" />;
}
