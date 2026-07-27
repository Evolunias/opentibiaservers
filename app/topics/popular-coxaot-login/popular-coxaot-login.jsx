import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-login');
}

export default function PopularCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-login" />;
}
