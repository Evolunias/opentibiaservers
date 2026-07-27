import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-ot-server');
}

export default function FreshStartTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-ot-server" />;
}
