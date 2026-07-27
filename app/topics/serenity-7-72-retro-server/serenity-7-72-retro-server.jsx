import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-retro-server');
}

export default function Serenity772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-retro-server" />;
}
