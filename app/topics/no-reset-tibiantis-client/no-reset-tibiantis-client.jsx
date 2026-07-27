import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-client');
}

export default function NoResetTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-client" />;
}
