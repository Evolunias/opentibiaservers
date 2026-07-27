import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-usa');
}

export default function SabrehavenRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-usa" />;
}
