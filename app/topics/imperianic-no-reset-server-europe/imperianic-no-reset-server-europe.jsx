import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-no-reset-server-europe');
}

export default function ImperianicNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-no-reset-server-europe" />;
}
