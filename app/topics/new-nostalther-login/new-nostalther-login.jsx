import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-login');
}

export default function NewNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-login" />;
}
