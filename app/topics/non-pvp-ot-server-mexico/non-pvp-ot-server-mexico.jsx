import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-mexico');
}

export default function NonPvpOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-mexico" />;
}
