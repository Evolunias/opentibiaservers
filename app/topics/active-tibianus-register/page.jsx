import ActiveTibianusRegisterKeywordPage, { generateMetadata } from './active-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusRegisterKeywordPage />;
}
