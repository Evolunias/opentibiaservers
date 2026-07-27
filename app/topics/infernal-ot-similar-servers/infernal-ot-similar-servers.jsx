import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-similar-servers');
}

export default function InfernalOtSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-similar-servers" />;
}
