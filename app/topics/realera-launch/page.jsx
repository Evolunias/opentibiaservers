import RealeraLaunchKeywordPage, { generateMetadata } from './realera-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraLaunchKeywordPage />;
}
