import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-server');
}

export default function CurrentTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-server" />;
}
