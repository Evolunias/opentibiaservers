import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-mexico');
}

export default function NoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-mexico" />;
}
