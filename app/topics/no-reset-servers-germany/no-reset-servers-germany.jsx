import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-germany');
}

export default function NoResetServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-germany" />;
}
