import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-france');
}

export default function TibianusRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-france" />;
}
