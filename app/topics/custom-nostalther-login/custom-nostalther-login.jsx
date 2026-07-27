import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-login');
}

export default function CustomNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-login" />;
}
