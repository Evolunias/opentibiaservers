import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-no-reset-server-usa');
}

export default function NostaltherNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-no-reset-server-usa" />;
}
