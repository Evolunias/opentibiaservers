import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-ot-server');
}

export default function ActiveTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-ot-server" />;
}
