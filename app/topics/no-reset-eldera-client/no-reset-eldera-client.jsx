import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-client');
}

export default function NoResetElderaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-client" />;
}
