import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-mexico');
}

export default function SabrehavenRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-mexico" />;
}
