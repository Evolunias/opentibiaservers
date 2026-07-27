import TopYurotsRegisterKeywordPage, { generateMetadata } from './top-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsRegisterKeywordPage />;
}
