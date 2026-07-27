import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-ots');
}

export default function NewLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-ots" />;
}
