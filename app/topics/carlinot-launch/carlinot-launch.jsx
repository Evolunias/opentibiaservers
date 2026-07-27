import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-launch');
}

export default function CarlinotLaunchKeywordPage() {
  return <StaticKeywordPage slug="carlinot-launch" />;
}
