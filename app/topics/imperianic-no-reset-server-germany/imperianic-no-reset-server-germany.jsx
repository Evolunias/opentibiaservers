import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-no-reset-server-germany');
}

export default function ImperianicNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-no-reset-server-germany" />;
}
