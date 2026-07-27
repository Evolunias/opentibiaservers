import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-launch');
}

export default function NostaltherLaunchKeywordPage() {
  return <StaticKeywordPage slug="nostalther-launch" />;
}
