import OtServerListLaunchKeywordPage, { generateMetadata } from './ot-server-list-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListLaunchKeywordPage />;
}
