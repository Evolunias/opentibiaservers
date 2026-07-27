import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-login');
}

export default function NostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="nostalther-login" />;
}
