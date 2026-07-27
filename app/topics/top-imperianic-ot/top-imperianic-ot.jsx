import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-ot');
}

export default function TopImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-ot" />;
}
