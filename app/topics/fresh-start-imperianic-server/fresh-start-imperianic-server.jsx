import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-server');
}

export default function FreshStartImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-server" />;
}
