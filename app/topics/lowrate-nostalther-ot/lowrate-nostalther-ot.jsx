import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-ot');
}

export default function LowrateNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-ot" />;
}
