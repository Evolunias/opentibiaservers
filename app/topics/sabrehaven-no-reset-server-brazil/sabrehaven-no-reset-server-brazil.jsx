import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-brazil');
}

export default function SabrehavenNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-brazil" />;
}
