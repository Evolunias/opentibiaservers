import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-retro-server');
}

export default function Sabrehaven76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-retro-server" />;
}
