import CurrentUnlineRegisterKeywordPage, { generateMetadata } from './current-unline-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineRegisterKeywordPage />;
}
