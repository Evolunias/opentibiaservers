import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-open-pvp');
}

export default function NeranaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="nerana-open-pvp" />;
}
