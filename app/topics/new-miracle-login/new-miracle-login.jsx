import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-login');
}

export default function NewMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-login" />;
}
