import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-ot');
}

export default function FreshStartDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-ot" />;
}
