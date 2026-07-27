import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-north-america');
}

export default function MistOfDeathNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-north-america" />;
}
