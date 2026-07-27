import NoResetAlasteraRegisterKeywordPage, { generateMetadata } from './no-reset-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraRegisterKeywordPage />;
}
