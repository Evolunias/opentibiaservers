import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('castoria-beta-launch-tomorrow-at-10-00-pm-gmt-2');
}

export default function CastoriaBetaLaunchTomorrowAt1000PmGmt2Page() {
  return <StaticExactMatchPage slug="castoria-beta-launch-tomorrow-at-10-00-pm-gmt-2" />;
}
