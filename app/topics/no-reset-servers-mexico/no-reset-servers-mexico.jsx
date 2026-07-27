import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-mexico');
}

export default function NoResetServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-mexico" />;
}
