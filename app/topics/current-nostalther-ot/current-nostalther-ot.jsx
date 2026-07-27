import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-ot');
}

export default function CurrentNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-ot" />;
}
