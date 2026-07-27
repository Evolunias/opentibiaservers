import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-ot-server');
}

export default function TopClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-ot-server" />;
}
