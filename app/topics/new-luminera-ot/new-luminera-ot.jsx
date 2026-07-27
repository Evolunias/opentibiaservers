import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-ot');
}

export default function NewLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-ot" />;
}
