import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-retro-server');
}

export default function Serenity11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-retro-server" />;
}
