import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-retro-server');
}

export default function Serenity84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-retro-server" />;
}
