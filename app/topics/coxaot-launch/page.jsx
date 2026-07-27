import CoxaotLaunchKeywordPage, { generateMetadata } from './coxaot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotLaunchKeywordPage />;
}
