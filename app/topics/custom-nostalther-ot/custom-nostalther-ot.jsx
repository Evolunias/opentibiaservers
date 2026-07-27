import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-ot');
}

export default function CustomNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-ot" />;
}
