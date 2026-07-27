import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-canada');
}

export default function MistOfDeathNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-canada" />;
}
