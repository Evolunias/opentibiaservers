import LowrateMistOfDeathRegisterKeywordPage, { generateMetadata } from './lowrate-mist-of-death-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMistOfDeathRegisterKeywordPage />;
}
