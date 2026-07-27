import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-optional-pvp');
}

export default function InfernaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="inferna-optional-pvp" />;
}
