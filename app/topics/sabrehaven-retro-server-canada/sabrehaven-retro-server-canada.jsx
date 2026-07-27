import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-canada');
}

export default function SabrehavenRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-canada" />;
}
