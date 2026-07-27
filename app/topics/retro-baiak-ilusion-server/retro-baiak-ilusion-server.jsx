import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-baiak-ilusion-server');
}

export default function RetroBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="retro-baiak-ilusion-server" />;
}
