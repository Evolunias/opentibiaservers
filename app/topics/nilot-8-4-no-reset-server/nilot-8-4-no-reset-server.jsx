import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-4-no-reset-server');
}

export default function Nilot84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-4-no-reset-server" />;
}
