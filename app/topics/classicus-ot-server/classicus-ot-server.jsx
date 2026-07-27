import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-ot-server');
}

export default function ClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-ot-server" />;
}
