import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-wars');
}

export default function NostaltherWarsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-wars" />;
}
