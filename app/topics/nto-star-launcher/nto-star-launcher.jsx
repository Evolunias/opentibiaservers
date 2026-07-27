import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-launcher');
}

export default function NtoStarLauncherKeywordPage() {
  return <StaticKeywordPage slug="nto-star-launcher" />;
}
