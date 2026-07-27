import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-poland');
}

export default function NoResetServersPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-poland" />;
}
