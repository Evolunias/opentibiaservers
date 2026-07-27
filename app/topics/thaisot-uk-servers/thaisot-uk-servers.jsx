import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-uk-servers');
}

export default function ThaisotUkServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-uk-servers" />;
}
