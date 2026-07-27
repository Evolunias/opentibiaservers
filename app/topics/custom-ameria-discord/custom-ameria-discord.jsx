import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-discord');
}

export default function CustomAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-discord" />;
}
