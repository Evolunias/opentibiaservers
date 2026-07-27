import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('falumirot');
}

export default function FalumirotPage() {
  return <StaticExactMatchPage slug="falumirot" />;
}
