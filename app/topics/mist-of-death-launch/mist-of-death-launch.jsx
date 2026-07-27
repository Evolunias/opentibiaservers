import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-launch');
}

export default function MistOfDeathLaunchKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-launch" />;
}
