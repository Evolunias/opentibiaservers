import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-north-america');
}

export default function ImperianicRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-north-america" />;
}
