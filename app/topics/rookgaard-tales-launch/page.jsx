import RookgaardTalesLaunchKeywordPage, { generateMetadata } from './rookgaard-tales-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesLaunchKeywordPage />;
}
