import AureraGlobalLaunchKeywordPage, { generateMetadata } from './aurera-global-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalLaunchKeywordPage />;
}
