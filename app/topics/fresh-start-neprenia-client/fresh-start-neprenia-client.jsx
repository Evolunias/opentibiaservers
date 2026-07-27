import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-client');
}

export default function FreshStartNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-client" />;
}
