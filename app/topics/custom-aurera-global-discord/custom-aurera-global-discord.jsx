import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-discord');
}

export default function CustomAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-discord" />;
}
