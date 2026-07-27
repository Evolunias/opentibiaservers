import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-status');
}

export default function NilotStatusKeywordPage() {
  return <StaticKeywordPage slug="nilot-status" />;
}
