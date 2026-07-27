import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-uk');
}

export default function PvpServersUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-uk" />;
}
