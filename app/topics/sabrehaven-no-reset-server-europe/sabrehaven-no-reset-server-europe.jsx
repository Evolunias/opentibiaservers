import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-europe');
}

export default function SabrehavenNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-europe" />;
}
