import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-no-reset-server-poland');
}

export default function NostaltherNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-no-reset-server-poland" />;
}
