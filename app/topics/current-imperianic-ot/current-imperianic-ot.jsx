import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-ot');
}

export default function CurrentImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-ot" />;
}
