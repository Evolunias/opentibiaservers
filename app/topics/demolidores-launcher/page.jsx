import DemolidoresLauncherKeywordPage, { generateMetadata } from './demolidores-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresLauncherKeywordPage />;
}
