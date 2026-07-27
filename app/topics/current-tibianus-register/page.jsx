import CurrentTibianusRegisterKeywordPage, { generateMetadata } from './current-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusRegisterKeywordPage />;
}
