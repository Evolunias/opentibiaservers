import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ikasera-war-launch-28-february');
}

export default function IkaseraWarLaunch28FebruaryPage() {
  return <StaticExactMatchPage slug="ikasera-war-launch-28-february" />;
}
