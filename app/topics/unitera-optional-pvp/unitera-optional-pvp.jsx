import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-optional-pvp');
}

export default function UniteraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="unitera-optional-pvp" />;
}
