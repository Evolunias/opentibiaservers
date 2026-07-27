import NewRealeraRegisterKeywordPage, { generateMetadata } from './new-realera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraRegisterKeywordPage />;
}
