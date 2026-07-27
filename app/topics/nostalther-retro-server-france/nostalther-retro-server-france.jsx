import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-france');
}

export default function NostaltherRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-france" />;
}
