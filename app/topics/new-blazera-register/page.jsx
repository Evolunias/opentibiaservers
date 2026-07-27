import NewBlazeraRegisterKeywordPage, { generateMetadata } from './new-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraRegisterKeywordPage />;
}
