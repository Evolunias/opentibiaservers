import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-launcher');
}

export default function TibiantisLauncherKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-launcher" />;
}
