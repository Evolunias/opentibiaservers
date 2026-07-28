import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('elfbot');
}

export default function ElfbotPage() {
  return <StaticExactMatchPage slug="elfbot" />;
}
