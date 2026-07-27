import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-mexico');
}

export default function LumineraLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-mexico" />;
}
