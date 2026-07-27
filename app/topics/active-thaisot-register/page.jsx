import ActiveThaisotRegisterKeywordPage, { generateMetadata } from './active-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotRegisterKeywordPage />;
}
