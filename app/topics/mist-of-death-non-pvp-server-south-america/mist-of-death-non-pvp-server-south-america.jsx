import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-south-america');
}

export default function MistOfDeathNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-south-america" />;
}
