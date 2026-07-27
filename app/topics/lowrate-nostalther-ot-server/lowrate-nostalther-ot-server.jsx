import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-ot-server');
}

export default function LowrateNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-ot-server" />;
}
