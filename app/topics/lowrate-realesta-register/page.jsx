import LowrateRealestaRegisterKeywordPage, { generateMetadata } from './lowrate-realesta-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaRegisterKeywordPage />;
}
