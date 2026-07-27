import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-canada-servers');
}

export default function TibiantisCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-canada-servers" />;
}
