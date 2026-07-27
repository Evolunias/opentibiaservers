import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-retro-server');
}

export default function Serenity76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-retro-server" />;
}
