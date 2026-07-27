import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-optional-pvp');
}

export default function AldoraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="aldora-optional-pvp" />;
}
