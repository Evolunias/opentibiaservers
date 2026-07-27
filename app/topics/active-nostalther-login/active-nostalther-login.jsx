import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-login');
}

export default function ActiveNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-login" />;
}
