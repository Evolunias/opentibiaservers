import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-ot-server');
}

export default function CustomTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-ot-server" />;
}
