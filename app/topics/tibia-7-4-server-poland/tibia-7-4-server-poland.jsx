import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-poland');
}

export default function Tibia74ServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-poland" />;
}
