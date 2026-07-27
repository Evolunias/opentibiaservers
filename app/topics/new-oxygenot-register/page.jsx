import NewOxygenotRegisterKeywordPage, { generateMetadata } from './new-oxygenot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotRegisterKeywordPage />;
}
