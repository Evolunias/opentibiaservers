import OfficialRealestaRegisterKeywordPage, { generateMetadata } from './official-realesta-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaRegisterKeywordPage />;
}
