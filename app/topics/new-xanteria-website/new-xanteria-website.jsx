import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-website');
}

export default function NewXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-website" />;
}
