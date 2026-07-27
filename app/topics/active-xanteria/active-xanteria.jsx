import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria');
}

export default function ActiveXanteriaKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria" />;
}
