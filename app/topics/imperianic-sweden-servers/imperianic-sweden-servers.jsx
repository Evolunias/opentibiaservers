import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-sweden-servers');
}

export default function ImperianicSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-sweden-servers" />;
}
