import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-poland');
}

export default function MistOfDeathNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-poland" />;
}
