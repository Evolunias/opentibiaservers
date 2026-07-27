import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-login');
}

export default function NewCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-login" />;
}
