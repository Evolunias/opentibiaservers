import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-ot-server');
}

export default function FreshStartRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-ot-server" />;
}
