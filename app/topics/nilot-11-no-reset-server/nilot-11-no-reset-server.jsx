import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-no-reset-server');
}

export default function Nilot11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-no-reset-server" />;
}
