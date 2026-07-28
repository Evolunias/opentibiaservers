import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibia-bot-ng');
}

export default function TibiaBotNgPage() {
  return <StaticExactMatchPage slug="tibia-bot-ng" />;
}
