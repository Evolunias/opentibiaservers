import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-brazil');
}

export default function NonPvpServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-brazil" />;
}
