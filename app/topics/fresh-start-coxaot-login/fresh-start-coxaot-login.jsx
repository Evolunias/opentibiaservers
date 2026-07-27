import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-login');
}

export default function FreshStartCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-login" />;
}
