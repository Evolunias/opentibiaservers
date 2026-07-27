import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-events');
}

export default function CoxaotEventsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-events" />;
}
