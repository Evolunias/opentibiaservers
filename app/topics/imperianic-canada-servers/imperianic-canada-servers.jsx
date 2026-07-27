import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-canada-servers');
}

export default function ImperianicCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-canada-servers" />;
}
