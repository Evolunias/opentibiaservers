import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-ot-server');
}

export default function ActiveClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-ot-server" />;
}
