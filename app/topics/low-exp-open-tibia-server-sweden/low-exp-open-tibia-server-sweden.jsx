import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-sweden');
}

export default function LowExpOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-sweden" />;
}
