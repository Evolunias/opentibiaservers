import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-france');
}

export default function Tibia74ServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-france" />;
}
