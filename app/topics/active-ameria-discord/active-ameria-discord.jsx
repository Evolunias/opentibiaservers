import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-discord');
}

export default function ActiveAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-discord" />;
}
