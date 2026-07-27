import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-login');
}

export default function CurrentCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-login" />;
}
