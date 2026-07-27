import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-login');
}

export default function FreshStartNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-login" />;
}
