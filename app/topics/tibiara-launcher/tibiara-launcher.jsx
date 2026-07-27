import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-launcher');
}

export default function TibiaraLauncherKeywordPage() {
  return <StaticKeywordPage slug="tibiara-launcher" />;
}
