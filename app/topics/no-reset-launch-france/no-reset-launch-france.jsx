import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-launch-france');
}

export default function NoResetLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-launch-france" />;
}
