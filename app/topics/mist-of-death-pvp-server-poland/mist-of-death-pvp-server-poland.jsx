import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-poland');
}

export default function MistOfDeathPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-poland" />;
}
