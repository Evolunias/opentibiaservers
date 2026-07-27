import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('cyntara');
}

export default function CyntaraPage() {
  return <StaticExactMatchPage slug="cyntara" />;
}
