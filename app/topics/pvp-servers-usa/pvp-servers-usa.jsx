import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-usa');
}

export default function PvpServersUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-usa" />;
}
