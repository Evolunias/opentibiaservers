import ActiveDemolidoresRegisterKeywordPage, { generateMetadata } from './active-demolidores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresRegisterKeywordPage />;
}
