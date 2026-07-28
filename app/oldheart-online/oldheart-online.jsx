import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('oldheart-online');
}

export default function OldheartOnlinePage() {
  return <StaticExactMatchPage slug="oldheart-online" />;
}
