import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-client');
}

export default function CustomAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-client" />;
}
