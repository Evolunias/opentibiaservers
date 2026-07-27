import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-login');
}

export default function BestImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-login" />;
}
