import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-server');
}

export default function FreshStartTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-server" />;
}
