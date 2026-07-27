import ActiveYurotsRegisterKeywordPage, { generateMetadata } from './active-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsRegisterKeywordPage />;
}
