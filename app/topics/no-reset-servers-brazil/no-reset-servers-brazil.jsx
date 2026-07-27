import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-brazil');
}

export default function NoResetServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-brazil" />;
}
