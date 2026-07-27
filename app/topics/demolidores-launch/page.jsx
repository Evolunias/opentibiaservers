import DemolidoresLaunchKeywordPage, { generateMetadata } from './demolidores-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresLaunchKeywordPage />;
}
