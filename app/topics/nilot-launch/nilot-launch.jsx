import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-launch');
}

export default function NilotLaunchKeywordPage() {
  return <StaticKeywordPage slug="nilot-launch" />;
}
