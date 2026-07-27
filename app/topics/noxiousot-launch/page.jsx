import NoxiousotLaunchKeywordPage, { generateMetadata } from './noxiousot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotLaunchKeywordPage />;
}
