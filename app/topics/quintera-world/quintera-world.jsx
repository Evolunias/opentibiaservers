import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-world');
}

export default function QuinteraWorldKeywordPage() {
  return <StaticKeywordPage slug="quintera-world" />;
}
