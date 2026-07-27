import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-server');
}

export default function FreshStartTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-server" />;
}
