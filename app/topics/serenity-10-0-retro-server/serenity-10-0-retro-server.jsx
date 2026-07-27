import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-retro-server');
}

export default function Serenity100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-retro-server" />;
}
