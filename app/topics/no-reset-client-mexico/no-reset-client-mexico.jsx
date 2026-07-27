import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-mexico');
}

export default function NoResetClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-mexico" />;
}
