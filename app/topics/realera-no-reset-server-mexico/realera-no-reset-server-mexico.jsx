import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-mexico');
}

export default function RealeraNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-mexico" />;
}
