import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-france');
}

export default function NostaltherHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-france" />;
}
