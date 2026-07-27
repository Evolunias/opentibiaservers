import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-ot-server');
}

export default function FreshStartRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-ot-server" />;
}
