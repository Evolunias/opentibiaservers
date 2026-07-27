import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-serenity-server');
}

export default function PvpSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-serenity-server" />;
}
