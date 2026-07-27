import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-france');
}

export default function FreshStartLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-france" />;
}
