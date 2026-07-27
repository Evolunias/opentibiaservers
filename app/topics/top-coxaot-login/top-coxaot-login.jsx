import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-login');
}

export default function TopCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-login" />;
}
