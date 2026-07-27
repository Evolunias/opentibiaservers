import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-login');
}

export default function FreshStartCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-login" />;
}
