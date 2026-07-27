import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-north-america');
}

export default function MistOfDeathPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-north-america" />;
}
