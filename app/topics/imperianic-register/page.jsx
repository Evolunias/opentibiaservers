import ImperianicRegisterKeywordPage, { generateMetadata } from './imperianic-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicRegisterKeywordPage />;
}
