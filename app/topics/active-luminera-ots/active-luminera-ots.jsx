import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-ots');
}

export default function ActiveLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-ots" />;
}
