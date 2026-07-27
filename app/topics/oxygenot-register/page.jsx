import OxygenotRegisterKeywordPage, { generateMetadata } from './oxygenot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRegisterKeywordPage />;
}
