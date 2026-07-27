import ActiveClassicusRegisterKeywordPage, { generateMetadata } from './active-classicus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusRegisterKeywordPage />;
}
