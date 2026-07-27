import OfficialYurotsRegisterKeywordPage, { generateMetadata } from './official-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsRegisterKeywordPage />;
}
