import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-canada');
}

export default function PvpServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-canada" />;
}
