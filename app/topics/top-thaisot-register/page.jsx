import TopThaisotRegisterKeywordPage, { generateMetadata } from './top-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotRegisterKeywordPage />;
}
