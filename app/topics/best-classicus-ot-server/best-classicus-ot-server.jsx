import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-ot-server');
}

export default function BestClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-ot-server" />;
}
