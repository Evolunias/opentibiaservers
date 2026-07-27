import RuthlessChaosLaunchKeywordPage, { generateMetadata } from './ruthless-chaos-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosLaunchKeywordPage />;
}
