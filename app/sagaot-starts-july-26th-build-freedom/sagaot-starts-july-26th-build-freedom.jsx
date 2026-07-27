import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('sagaot-starts-july-26th-build-freedom');
}

export default function SagaotStartsJuly26thBuildFreedomPage() {
  return <StaticExactMatchPage slug="sagaot-starts-july-26th-build-freedom" />;
}
