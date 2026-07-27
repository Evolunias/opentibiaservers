import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-server');
}

export default function CustomAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-server" />;
}
