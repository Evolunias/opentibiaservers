import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-no-reset-server');
}

export default function Nilot13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-no-reset-server" />;
}
