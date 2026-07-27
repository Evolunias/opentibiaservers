import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-login');
}

export default function TopNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-login" />;
}
