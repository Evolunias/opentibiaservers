import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania');
}

export default function TitaniaKeywordPage() {
  return <StaticKeywordPage slug="titania" />;
}
