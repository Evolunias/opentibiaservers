import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-mist-of-death-server');
}

export default function NonPvpMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-mist-of-death-server" />;
}
