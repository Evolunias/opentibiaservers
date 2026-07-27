import InfernalOtLaunchKeywordPage, { generateMetadata } from './infernal-ot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtLaunchKeywordPage />;
}
