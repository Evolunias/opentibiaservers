import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-client');
}

export default function NoResetXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-client" />;
}
