import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-france-servers');
}

export default function RealestaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-france-servers" />;
}
