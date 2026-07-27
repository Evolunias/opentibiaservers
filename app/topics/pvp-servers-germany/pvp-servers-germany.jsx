import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-germany');
}

export default function PvpServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-germany" />;
}
