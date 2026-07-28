import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('elf-bot');
}

export default function ElfBotPage() {
  return <StaticExactMatchPage slug="elf-bot" />;
}
