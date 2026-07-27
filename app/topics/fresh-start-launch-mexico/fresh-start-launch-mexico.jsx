import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-mexico');
}

export default function FreshStartLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-mexico" />;
}
