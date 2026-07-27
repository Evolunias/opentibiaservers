import ClassickDrakoriaLauncherKeywordPage, { generateMetadata } from './classick-drakoria-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaLauncherKeywordPage />;
}
