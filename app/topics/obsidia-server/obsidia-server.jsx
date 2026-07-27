import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-server');
}

export default function ObsidiaServerKeywordPage() {
  return <StaticKeywordPage slug="obsidia-server" />;
}
