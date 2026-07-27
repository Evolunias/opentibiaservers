import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-uk-server');
}

export default function ThaisotUkServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-uk-server" />;
}
