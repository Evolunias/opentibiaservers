import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-france');
}

export default function MistOfDeathNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-france" />;
}
