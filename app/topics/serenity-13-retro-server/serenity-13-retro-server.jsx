import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-retro-server');
}

export default function Serenity13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-retro-server" />;
}
