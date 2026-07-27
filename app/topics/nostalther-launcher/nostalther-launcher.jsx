import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-launcher');
}

export default function NostaltherLauncherKeywordPage() {
  return <StaticKeywordPage slug="nostalther-launcher" />;
}
