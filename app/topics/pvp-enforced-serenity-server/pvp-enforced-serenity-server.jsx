import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-serenity-server');
}

export default function PvpEnforcedSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-serenity-server" />;
}
