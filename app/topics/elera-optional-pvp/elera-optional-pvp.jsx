import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-optional-pvp');
}

export default function EleraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="elera-optional-pvp" />;
}
