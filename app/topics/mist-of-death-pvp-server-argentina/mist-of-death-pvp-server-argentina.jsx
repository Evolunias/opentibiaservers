import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-argentina');
}

export default function MistOfDeathPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-argentina" />;
}
