import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-retro-server');
}

export default function Serenity854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-retro-server" />;
}
