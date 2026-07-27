import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-ot');
}

export default function TopDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-ot" />;
}
