import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-chile-server');
}

export default function ImperianicChileServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-chile-server" />;
}
