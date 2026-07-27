import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-ot-server');
}

export default function CurrentClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-ot-server" />;
}
