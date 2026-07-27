import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-optional-pvp');
}

export default function DoleraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="dolera-optional-pvp" />;
}
