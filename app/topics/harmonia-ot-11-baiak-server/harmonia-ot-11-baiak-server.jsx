import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-baiak-server');
}

export default function HarmoniaOt11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-baiak-server" />;
}
