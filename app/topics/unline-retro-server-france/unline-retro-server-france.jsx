import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-france');
}

export default function UnlineRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-france" />;
}
