import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-launch');
}

export default function MidhemLaunchKeywordPage() {
  return <StaticKeywordPage slug="midhem-launch" />;
}
