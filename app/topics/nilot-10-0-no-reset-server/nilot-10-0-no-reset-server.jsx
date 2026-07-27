import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-no-reset-server');
}

export default function Nilot100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-no-reset-server" />;
}
