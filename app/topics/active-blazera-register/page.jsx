import ActiveBlazeraRegisterKeywordPage, { generateMetadata } from './active-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraRegisterKeywordPage />;
}
