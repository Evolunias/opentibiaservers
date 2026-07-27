import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-server');
}

export default function TibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-server" />;
}
