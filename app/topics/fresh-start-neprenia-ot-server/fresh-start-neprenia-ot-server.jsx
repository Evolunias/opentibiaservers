import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-ot-server');
}

export default function FreshStartNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-ot-server" />;
}
