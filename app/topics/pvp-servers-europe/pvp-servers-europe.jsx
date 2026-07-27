import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-europe');
}

export default function PvpServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-europe" />;
}
