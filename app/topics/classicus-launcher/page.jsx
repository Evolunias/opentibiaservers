import ClassicusLauncherKeywordPage, { generateMetadata } from './classicus-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusLauncherKeywordPage />;
}
