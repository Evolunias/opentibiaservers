import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-france');
}

export default function SabrehavenRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-france" />;
}
