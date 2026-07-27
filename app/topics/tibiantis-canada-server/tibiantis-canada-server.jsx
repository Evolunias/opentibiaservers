import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-canada-server');
}

export default function TibiantisCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-canada-server" />;
}
