import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-ot-server');
}

export default function TibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-ot-server" />;
}
