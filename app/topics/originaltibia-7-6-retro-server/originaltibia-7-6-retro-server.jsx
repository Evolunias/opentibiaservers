import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-retro-server');
}

export default function Originaltibia76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-retro-server" />;
}
