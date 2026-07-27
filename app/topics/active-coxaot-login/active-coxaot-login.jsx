import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-login');
}

export default function ActiveCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-login" />;
}
