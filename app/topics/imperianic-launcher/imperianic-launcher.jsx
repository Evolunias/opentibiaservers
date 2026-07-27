import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-launcher');
}

export default function ImperianicLauncherKeywordPage() {
  return <StaticKeywordPage slug="imperianic-launcher" />;
}
