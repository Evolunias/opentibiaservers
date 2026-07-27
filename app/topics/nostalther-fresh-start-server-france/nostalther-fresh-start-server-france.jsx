import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-fresh-start-server-france');
}

export default function NostaltherFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-fresh-start-server-france" />;
}
