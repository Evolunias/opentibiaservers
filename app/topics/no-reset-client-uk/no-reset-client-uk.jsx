import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-uk');
}

export default function NoResetClientUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-uk" />;
}
