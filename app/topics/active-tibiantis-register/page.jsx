import ActiveTibiantisRegisterKeywordPage, { generateMetadata } from './active-tibiantis-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisRegisterKeywordPage />;
}
