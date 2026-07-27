import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otland');
}

export default function BestOtlandKeywordPage() {
  return <StaticKeywordPage slug="best-otland" />;
}
