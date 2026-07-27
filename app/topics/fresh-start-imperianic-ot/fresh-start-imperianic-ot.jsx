import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-ot');
}

export default function FreshStartImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-ot" />;
}
