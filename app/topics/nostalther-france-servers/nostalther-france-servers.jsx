import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-france-servers');
}

export default function NostaltherFranceServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-france-servers" />;
}
