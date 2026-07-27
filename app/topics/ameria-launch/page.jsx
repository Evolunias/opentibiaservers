import AmeriaLaunchKeywordPage, { generateMetadata } from './ameria-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaLaunchKeywordPage />;
}
