import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-argentina');
}

export default function PvpServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-argentina" />;
}
