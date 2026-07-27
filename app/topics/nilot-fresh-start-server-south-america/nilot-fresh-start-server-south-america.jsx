import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-south-america');
}

export default function NilotFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-south-america" />;
}
