import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-ot');
}

export default function CustomLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-ot" />;
}
