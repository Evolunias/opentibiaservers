import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-create-account');
}

export default function CarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="carlinot-create-account" />;
}
