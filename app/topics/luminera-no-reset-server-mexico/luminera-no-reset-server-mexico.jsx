import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-mexico');
}

export default function LumineraNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-mexico" />;
}
