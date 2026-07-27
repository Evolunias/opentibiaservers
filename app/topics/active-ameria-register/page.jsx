import ActiveAmeriaRegisterKeywordPage, { generateMetadata } from './active-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaRegisterKeywordPage />;
}
