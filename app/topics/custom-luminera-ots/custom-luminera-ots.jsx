import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-ots');
}

export default function CustomLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-ots" />;
}
