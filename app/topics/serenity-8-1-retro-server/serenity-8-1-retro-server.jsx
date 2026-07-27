import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-retro-server');
}

export default function Serenity81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-retro-server" />;
}
