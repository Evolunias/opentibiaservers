import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-argentina');
}

export default function SabrehavenRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-argentina" />;
}
