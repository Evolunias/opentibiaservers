import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-0-no-reset-server');
}

export default function Nilot80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-0-no-reset-server" />;
}
