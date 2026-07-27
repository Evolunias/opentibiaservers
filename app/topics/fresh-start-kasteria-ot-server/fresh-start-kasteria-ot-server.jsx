import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-ot-server');
}

export default function FreshStartKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-ot-server" />;
}
