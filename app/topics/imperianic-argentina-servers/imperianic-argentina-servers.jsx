import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-argentina-servers');
}

export default function ImperianicArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-argentina-servers" />;
}
