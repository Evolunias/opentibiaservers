import AmeriaLauncherKeywordPage, { generateMetadata } from './ameria-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaLauncherKeywordPage />;
}
