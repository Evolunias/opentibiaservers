import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-1-no-reset-server');
}

export default function Unline81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-1-no-reset-server" />;
}
