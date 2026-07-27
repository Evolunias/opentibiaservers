import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-launch');
}

export default function DemolidoresLaunchKeywordPage() {
  return <StaticKeywordPage slug="demolidores-launch" />;
}
