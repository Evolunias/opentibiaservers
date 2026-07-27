import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-france');
}

export default function NostaltherLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-france" />;
}
