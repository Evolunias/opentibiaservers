import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera');
}

export default function QuinteraKeywordPage() {
  return <StaticKeywordPage slug="quintera" />;
}
