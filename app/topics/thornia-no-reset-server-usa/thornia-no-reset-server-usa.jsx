import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-no-reset-server-usa');
}

export default function ThorniaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-no-reset-server-usa" />;
}
