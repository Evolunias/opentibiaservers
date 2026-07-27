import DemolidoresRegisterKeywordPage, { generateMetadata } from './demolidores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresRegisterKeywordPage />;
}
