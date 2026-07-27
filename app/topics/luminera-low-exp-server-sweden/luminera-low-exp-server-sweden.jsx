import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-sweden');
}

export default function LumineraLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-sweden" />;
}
