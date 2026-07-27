import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-launcher');
}

export default function SerenityLauncherKeywordPage() {
  return <StaticKeywordPage slug="serenity-launcher" />;
}
