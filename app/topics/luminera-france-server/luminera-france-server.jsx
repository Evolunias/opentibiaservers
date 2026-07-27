import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-france-server');
}

export default function LumineraFranceServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-france-server" />;
}
