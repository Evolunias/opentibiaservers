import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-mexico');
}

export default function NonPvpServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-mexico" />;
}
