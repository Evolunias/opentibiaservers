import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-canada');
}

export default function MistOfDeathPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-canada" />;
}
