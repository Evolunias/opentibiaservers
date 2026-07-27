import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-optional-pvp');
}

export default function CelestaOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="celesta-optional-pvp" />;
}
