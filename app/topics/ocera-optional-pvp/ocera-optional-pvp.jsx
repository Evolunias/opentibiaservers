import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-optional-pvp');
}

export default function OceraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="ocera-optional-pvp" />;
}
