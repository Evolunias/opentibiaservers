import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-south-america');
}

export default function LumineraHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-south-america" />;
}
