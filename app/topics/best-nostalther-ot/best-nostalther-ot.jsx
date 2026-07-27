import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-ot');
}

export default function BestNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-ot" />;
}
