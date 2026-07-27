import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-ot');
}

export default function NewNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-ot" />;
}
