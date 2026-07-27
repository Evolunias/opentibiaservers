import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-south-america');
}

export default function NilotHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-south-america" />;
}
