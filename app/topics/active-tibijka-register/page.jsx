import ActiveTibijkaRegisterKeywordPage, { generateMetadata } from './active-tibijka-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaRegisterKeywordPage />;
}
