import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-website');
}

export default function NoResetXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-website" />;
}
