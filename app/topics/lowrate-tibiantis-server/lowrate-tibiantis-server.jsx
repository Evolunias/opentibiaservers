import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-server');
}

export default function LowrateTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-server" />;
}
