import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-login');
}

export default function FreshStartNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-login" />;
}
