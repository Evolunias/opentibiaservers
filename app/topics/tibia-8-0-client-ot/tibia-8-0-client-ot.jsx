import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-client-ot');
}

export default function Tibia80ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-client-ot" />;
}
