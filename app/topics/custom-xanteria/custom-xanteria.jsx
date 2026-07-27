import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria');
}

export default function CustomXanteriaKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria" />;
}
