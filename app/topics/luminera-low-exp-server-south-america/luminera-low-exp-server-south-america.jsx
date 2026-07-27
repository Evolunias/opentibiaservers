import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-south-america');
}

export default function LumineraLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-south-america" />;
}
