import HighrateYurotsRegisterKeywordPage, { generateMetadata } from './highrate-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsRegisterKeywordPage />;
}
