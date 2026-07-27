import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-uk');
}

export default function SabrehavenNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-uk" />;
}
