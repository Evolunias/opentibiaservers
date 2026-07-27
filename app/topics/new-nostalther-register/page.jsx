import NewNostaltherRegisterKeywordPage, { generateMetadata } from './new-nostalther-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherRegisterKeywordPage />;
}
