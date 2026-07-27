import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-argentina');
}

export default function MistOfDeathNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-argentina" />;
}
