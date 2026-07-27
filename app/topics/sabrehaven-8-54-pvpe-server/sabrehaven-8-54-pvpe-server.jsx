import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-54-pvpe-server');
}

export default function Sabrehaven854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-54-pvpe-server" />;
}
