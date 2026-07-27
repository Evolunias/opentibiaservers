import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-uk');
}

export default function NoResetServersUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-uk" />;
}
