import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-ot');
}

export default function TopNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-ot" />;
}
