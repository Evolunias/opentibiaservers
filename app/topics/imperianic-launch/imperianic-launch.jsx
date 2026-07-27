import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-launch');
}

export default function ImperianicLaunchKeywordPage() {
  return <StaticKeywordPage slug="imperianic-launch" />;
}
