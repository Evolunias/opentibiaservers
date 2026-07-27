import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-launcher');
}

export default function TibiascapeLauncherKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-launcher" />;
}
