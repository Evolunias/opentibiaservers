import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-ot');
}

export default function NostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="nostalther-ot" />;
}
