import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-europe');
}

export default function OxygenotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-europe" />;
}
