import LowrateYurotsRegisterKeywordPage, { generateMetadata } from './lowrate-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsRegisterKeywordPage />;
}
