import NepreniaLauncherKeywordPage, { generateMetadata } from './neprenia-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaLauncherKeywordPage />;
}
