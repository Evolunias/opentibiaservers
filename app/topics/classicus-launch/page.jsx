import ClassicusLaunchKeywordPage, { generateMetadata } from './classicus-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusLaunchKeywordPage />;
}
