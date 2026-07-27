import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria');
}

export default function OfficialXanteriaKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria" />;
}
