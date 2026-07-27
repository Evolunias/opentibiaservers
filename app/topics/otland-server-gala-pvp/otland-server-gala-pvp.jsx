import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-pvp');
}

export default function OtlandServerGalaPvpKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-pvp" />;
}
