import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-germany');
}

export default function SabrehavenNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-germany" />;
}
