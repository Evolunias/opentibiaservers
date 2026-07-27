import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-no-reset-server-brazil');
}

export default function ThorniaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-no-reset-server-brazil" />;
}
