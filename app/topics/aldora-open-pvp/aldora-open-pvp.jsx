import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-open-pvp');
}

export default function AldoraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="aldora-open-pvp" />;
}
