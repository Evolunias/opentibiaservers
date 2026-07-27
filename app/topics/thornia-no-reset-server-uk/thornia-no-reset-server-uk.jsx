import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-no-reset-server-uk');
}

export default function ThorniaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-no-reset-server-uk" />;
}
