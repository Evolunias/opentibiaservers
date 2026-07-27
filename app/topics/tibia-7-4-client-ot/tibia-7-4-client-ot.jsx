import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-client-ot');
}

export default function Tibia74ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-client-ot" />;
}
