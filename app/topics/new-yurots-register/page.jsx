import NewYurotsRegisterKeywordPage, { generateMetadata } from './new-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsRegisterKeywordPage />;
}
