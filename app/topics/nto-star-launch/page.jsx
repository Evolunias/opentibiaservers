import NtoStarLaunchKeywordPage, { generateMetadata } from './nto-star-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarLaunchKeywordPage />;
}
