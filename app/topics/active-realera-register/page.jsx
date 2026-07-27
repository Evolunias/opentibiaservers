import ActiveRealeraRegisterKeywordPage, { generateMetadata } from './active-realera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraRegisterKeywordPage />;
}
