import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-ot-server');
}

export default function FreshStartImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-ot-server" />;
}
