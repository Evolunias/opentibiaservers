import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-discord');
}

export default function CustomClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-discord" />;
}
