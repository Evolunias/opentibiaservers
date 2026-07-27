import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-retro-server');
}

export default function Serenity86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-retro-server" />;
}
