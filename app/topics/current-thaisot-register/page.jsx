import CurrentThaisotRegisterKeywordPage, { generateMetadata } from './current-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotRegisterKeywordPage />;
}
