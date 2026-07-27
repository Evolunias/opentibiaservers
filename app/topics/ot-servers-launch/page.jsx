import OtServersLaunchKeywordPage, { generateMetadata } from './ot-servers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersLaunchKeywordPage />;
}
