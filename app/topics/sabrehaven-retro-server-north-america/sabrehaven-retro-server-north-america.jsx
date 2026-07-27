import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-north-america');
}

export default function SabrehavenRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-north-america" />;
}
