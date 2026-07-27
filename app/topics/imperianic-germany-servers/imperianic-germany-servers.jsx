import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-germany-servers');
}

export default function ImperianicGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-germany-servers" />;
}
