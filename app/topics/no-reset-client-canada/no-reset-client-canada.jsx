import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-canada');
}

export default function NoResetClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-canada" />;
}
