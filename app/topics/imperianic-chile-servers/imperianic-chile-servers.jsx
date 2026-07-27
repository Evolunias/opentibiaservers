import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-chile-servers');
}

export default function ImperianicChileServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-chile-servers" />;
}
