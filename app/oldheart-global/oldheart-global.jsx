import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('oldheart-global');
}

export default function OldheartGlobalPage() {
  return <StaticExactMatchPage slug="oldheart-global" />;
}
