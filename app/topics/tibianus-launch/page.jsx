import TibianusLaunchKeywordPage, { generateMetadata } from './tibianus-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusLaunchKeywordPage />;
}
