import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-launch');
}

export default function MediviaLaunchKeywordPage() {
  return <StaticKeywordPage slug="medivia-launch" />;
}
