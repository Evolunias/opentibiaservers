import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('cyntara-highrate');
}

export default function CyntaraHighratePage() {
  return <StaticExactMatchPage slug="cyntara-highrate" />;
}
