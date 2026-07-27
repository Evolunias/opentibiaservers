import LowrateRuthlessChaosKeywordPage, { generateMetadata } from './lowrate-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRuthlessChaosKeywordPage />;
}
