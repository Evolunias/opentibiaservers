import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-poland');
}

export default function NonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-poland" />;
}
