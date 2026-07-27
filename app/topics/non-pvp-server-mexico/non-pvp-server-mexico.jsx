import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-mexico');
}

export default function NonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-mexico" />;
}
