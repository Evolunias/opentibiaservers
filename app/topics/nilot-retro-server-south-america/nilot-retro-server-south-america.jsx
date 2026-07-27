import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-south-america');
}

export default function NilotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-south-america" />;
}
