import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-4-retro-server');
}

export default function Serenity74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-4-retro-server" />;
}
