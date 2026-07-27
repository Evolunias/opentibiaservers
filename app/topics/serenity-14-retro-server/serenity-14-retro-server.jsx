import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-retro-server');
}

export default function Serenity14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-retro-server" />;
}
