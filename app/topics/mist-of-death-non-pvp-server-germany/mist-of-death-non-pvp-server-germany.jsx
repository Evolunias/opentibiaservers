import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-germany');
}

export default function MistOfDeathNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-germany" />;
}
