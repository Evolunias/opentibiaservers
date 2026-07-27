import NtoStarLauncherKeywordPage, { generateMetadata } from './nto-star-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarLauncherKeywordPage />;
}
