import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-canada');
}

export default function RetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-canada" />;
}
