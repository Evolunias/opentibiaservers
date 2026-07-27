import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-france');
}

export default function LumineraRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-france" />;
}
