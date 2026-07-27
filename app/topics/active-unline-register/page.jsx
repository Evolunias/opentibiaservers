import ActiveUnlineRegisterKeywordPage, { generateMetadata } from './active-unline-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineRegisterKeywordPage />;
}
