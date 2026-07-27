import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-client');
}

export default function NewAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-client" />;
}
