import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('crownots-start-on-feb-28th-18-00-cet');
}

export default function CrownotsStartOnFeb28th1800CetPage() {
  return <StaticExactMatchPage slug="crownots-start-on-feb-28th-18-00-cet" />;
}
