import CoxaotLauncherKeywordPage, { generateMetadata } from './coxaot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotLauncherKeywordPage />;
}
