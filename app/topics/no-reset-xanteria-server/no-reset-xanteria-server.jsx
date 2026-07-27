import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-server');
}

export default function NoResetXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-server" />;
}
