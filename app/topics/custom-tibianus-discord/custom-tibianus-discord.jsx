import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-discord');
}

export default function CustomTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-discord" />;
}
