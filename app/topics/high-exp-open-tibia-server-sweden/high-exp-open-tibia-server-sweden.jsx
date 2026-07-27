import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-sweden');
}

export default function HighExpOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-sweden" />;
}
