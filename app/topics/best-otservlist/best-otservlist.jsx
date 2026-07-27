import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otservlist');
}

export default function BestOtservlistKeywordPage() {
  return <StaticKeywordPage slug="best-otservlist" />;
}
