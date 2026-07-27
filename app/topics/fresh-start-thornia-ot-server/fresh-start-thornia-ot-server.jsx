import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-ot-server');
}

export default function FreshStartThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-ot-server" />;
}
