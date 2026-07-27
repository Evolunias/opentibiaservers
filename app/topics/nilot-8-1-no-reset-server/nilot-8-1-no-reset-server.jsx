import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-no-reset-server');
}

export default function Nilot81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-no-reset-server" />;
}
