import NepreniaLaunchKeywordPage, { generateMetadata } from './neprenia-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaLaunchKeywordPage />;
}
