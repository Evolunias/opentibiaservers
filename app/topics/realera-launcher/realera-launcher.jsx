import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-launcher');
}

export default function RealeraLauncherKeywordPage() {
  return <StaticKeywordPage slug="realera-launcher" />;
}
