import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-client');
}

export default function NoResetThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-client" />;
}
