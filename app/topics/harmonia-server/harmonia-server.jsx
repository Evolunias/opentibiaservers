import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-server');
}

export default function HarmoniaServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-server" />;
}
