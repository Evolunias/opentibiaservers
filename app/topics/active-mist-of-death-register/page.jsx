import ActiveMistOfDeathRegisterKeywordPage, { generateMetadata } from './active-mist-of-death-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMistOfDeathRegisterKeywordPage />;
}
