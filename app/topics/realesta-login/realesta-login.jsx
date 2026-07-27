import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-login');
}

export default function RealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="realesta-login" />;
}
