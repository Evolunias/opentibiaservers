import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-ot');
}

export default function NewOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-ot" />;
}
