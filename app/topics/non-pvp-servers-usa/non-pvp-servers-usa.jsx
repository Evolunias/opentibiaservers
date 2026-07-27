import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-usa');
}

export default function NonPvpServersUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-usa" />;
}
