import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-south-america-server');
}

export default function RuthlessChaosSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-south-america-server" />;
}
