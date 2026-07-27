import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-no-reset-server-poland');
}

export default function ThorniaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-no-reset-server-poland" />;
}
