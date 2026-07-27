import OxygenotLaunchKeywordPage, { generateMetadata } from './oxygenot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotLaunchKeywordPage />;
}
