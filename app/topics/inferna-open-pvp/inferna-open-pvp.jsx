import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-open-pvp');
}

export default function InfernaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="inferna-open-pvp" />;
}
