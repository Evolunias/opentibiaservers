import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-brazil');
}

export default function MistOfDeathNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-brazil" />;
}
