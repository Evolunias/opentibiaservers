import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-login');
}

export default function PopularNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-login" />;
}
