import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-ots');
}

export default function BestNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-ots" />;
}
