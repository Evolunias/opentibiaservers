import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-launcher');
}

export default function DemolidoresLauncherKeywordPage() {
  return <StaticKeywordPage slug="demolidores-launcher" />;
}
