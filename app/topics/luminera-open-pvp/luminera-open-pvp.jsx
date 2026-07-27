import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-open-pvp');
}

export default function LumineraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="luminera-open-pvp" />;
}
