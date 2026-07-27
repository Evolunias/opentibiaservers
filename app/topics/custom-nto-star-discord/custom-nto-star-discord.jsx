import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-discord');
}

export default function CustomNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-discord" />;
}
