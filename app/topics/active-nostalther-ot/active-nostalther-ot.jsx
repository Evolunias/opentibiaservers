import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-ot');
}

export default function ActiveNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-ot" />;
}
