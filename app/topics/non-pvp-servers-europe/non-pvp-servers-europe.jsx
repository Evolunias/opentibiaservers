import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-europe');
}

export default function NonPvpServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-europe" />;
}
