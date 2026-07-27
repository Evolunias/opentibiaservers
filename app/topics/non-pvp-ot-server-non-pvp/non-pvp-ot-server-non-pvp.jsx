import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-non-pvp');
}

export default function NonPvpOtServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-non-pvp" />;
}
