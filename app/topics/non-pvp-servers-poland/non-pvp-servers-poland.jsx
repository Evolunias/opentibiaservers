import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-poland');
}

export default function NonPvpServersPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-poland" />;
}
