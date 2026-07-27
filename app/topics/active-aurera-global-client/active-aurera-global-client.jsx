import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-client');
}

export default function ActiveAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-client" />;
}
