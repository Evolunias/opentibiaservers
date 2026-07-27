import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-no-reset-server');
}

export default function Nilot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-no-reset-server" />;
}
