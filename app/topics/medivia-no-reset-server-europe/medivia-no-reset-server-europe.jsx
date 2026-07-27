import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-europe');
}

export default function MediviaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-europe" />;
}
