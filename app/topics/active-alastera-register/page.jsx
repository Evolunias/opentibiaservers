import ActiveAlasteraRegisterKeywordPage, { generateMetadata } from './active-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraRegisterKeywordPage />;
}
