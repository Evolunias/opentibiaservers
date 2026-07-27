import NewTibijkaRegisterKeywordPage, { generateMetadata } from './new-tibijka-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaRegisterKeywordPage />;
}
