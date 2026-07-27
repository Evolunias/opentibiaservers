import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-launcher');
}

export default function AlasteraLauncherKeywordPage() {
  return <StaticKeywordPage slug="alastera-launcher" />;
}
