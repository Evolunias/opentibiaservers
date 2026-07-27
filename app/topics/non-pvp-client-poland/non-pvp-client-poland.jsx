import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-poland');
}

export default function NonPvpClientPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-poland" />;
}
