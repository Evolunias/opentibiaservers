import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-brazil');
}

export default function SabrehavenRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-brazil" />;
}
