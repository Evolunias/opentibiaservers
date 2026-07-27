import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-no-reset-server');
}

export default function Nilot12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-no-reset-server" />;
}
