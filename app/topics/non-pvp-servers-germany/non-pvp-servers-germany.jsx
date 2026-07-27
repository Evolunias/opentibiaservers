import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-germany');
}

export default function NonPvpServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-germany" />;
}
