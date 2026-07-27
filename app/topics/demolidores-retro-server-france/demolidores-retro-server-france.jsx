import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-retro-server-france');
}

export default function DemolidoresRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-retro-server-france" />;
}
