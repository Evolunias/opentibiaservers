import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('oldevo-pl');
}

export default function OldevoPlPage() {
  return <StaticExactMatchPage slug="oldevo-pl" />;
}
