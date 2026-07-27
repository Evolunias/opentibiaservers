import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-non-pvp');
}

export default function OtlandServerGalaNonPvpKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-non-pvp" />;
}
