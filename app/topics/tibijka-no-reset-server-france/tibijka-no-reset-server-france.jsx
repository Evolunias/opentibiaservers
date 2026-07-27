import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-france');
}

export default function TibijkaNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-france" />;
}
