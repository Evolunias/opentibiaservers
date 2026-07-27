import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-login');
}

export default function BestNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-login" />;
}
