import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-launch');
}

export default function SerenityLaunchKeywordPage() {
  return <StaticKeywordPage slug="serenity-launch" />;
}
