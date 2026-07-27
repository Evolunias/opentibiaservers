import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-ot');
}

export default function FreshStartRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-ot" />;
}
