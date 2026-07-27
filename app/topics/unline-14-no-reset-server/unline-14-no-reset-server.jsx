import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-no-reset-server');
}

export default function Unline14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-no-reset-server" />;
}
