import ActiveOxygenotRegisterKeywordPage, { generateMetadata } from './active-oxygenot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotRegisterKeywordPage />;
}
