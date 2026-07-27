import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-south-america');
}

export default function NilotLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-south-america" />;
}
