import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-server');
}

export default function NewAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-server" />;
}
