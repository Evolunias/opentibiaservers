import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-serenity-server');
}

export default function NonPvpSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-serenity-server" />;
}
