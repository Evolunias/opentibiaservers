import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-france');
}

export default function NonPvpLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-france" />;
}
