import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-no-reset-server');
}

export default function Nilot71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-no-reset-server" />;
}
