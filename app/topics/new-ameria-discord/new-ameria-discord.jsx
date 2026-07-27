import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-discord');
}

export default function NewAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-discord" />;
}
