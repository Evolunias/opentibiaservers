import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-launch');
}

export default function NonPvpOtServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-launch" />;
}
