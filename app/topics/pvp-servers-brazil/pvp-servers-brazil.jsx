import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-brazil');
}

export default function PvpServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-brazil" />;
}
