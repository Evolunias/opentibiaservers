import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-0-retro-server');
}

export default function Serenity80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-0-retro-server" />;
}
