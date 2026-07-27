import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-discord');
}

export default function ActiveTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-discord" />;
}
