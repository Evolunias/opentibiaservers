import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-login');
}

export default function LowrateCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-login" />;
}
