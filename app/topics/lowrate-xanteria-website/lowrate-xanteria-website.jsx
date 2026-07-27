import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-website');
}

export default function LowrateXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-website" />;
}
