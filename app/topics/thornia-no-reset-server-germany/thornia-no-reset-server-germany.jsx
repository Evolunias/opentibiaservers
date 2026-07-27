import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-no-reset-server-germany');
}

export default function ThorniaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-no-reset-server-germany" />;
}
