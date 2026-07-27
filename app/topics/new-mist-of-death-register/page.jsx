import NewMistOfDeathRegisterKeywordPage, { generateMetadata } from './new-mist-of-death-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMistOfDeathRegisterKeywordPage />;
}
