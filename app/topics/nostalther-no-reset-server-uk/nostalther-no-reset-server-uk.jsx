import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-no-reset-server-uk');
}

export default function NostaltherNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-no-reset-server-uk" />;
}
