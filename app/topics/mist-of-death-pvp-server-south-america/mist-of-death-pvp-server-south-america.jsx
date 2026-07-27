import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-south-america');
}

export default function MistOfDeathPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-south-america" />;
}
