import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-poland');
}

export default function NoResetClientPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-poland" />;
}
