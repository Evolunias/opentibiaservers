import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-france-server');
}

export default function NostaltherFranceServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-france-server" />;
}
