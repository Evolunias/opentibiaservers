import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-poland');
}

export default function NoResetServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-poland" />;
}
