import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-launcher');
}

export default function SabrehavenLauncherKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-launcher" />;
}
