import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-france-servers');
}

export default function LumineraFranceServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-france-servers" />;
}
