import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-world');
}

export default function TitaniaWorldKeywordPage() {
  return <StaticKeywordPage slug="titania-world" />;
}
