import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-guilds');
}

export default function UniteraGuildsKeywordPage() {
  return <StaticKeywordPage slug="unitera-guilds" />;
}
