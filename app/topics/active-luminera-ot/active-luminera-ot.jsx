import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-ot');
}

export default function ActiveLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-ot" />;
}
