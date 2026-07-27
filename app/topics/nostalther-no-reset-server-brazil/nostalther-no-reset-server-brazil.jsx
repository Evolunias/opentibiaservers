import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-no-reset-server-brazil');
}

export default function NostaltherNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-no-reset-server-brazil" />;
}
